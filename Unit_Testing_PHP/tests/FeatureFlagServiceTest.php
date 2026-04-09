<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../src/FeatureFlagService.php';

class FeatureFlagServiceTest extends TestCase
{
    private FeatureFlagService $service;

    protected function setUp(): void
    {
        $flags = [
            'feature_x' => [
                'roles' => ['admin'],
                'environments' => ['production'],
                'rolloutPercentage' => 100
            ]
        ];

        $this->service = new FeatureFlagService($flags);
    }

    public function testFeatureEnabledForAdmin()
    {
        $this->assertTrue(
            $this->service->isEnabled('feature_x', 'admin', 'production', 42)
        );
    }

    public function testFeatureDisabledForWrongRole()
    {
        $this->assertFalse(
            $this->service->isEnabled('feature_x', 'user', 'production', 10)
        );
    }

    public function testFeatureDisabledForWrongEnvironment()
    {
        $this->assertFalse(
            $this->service->isEnabled('feature_x', 'admin', 'staging', 10)
        );
    }

    public function testUnknownFeatureIsDisabled()
    {
        $this->assertFalse(
            $this->service->isEnabled('unknown', 'admin', 'production', 10)
        );
    }
}