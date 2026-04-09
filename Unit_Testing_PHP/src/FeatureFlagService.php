<?php

class FeatureFlagService
{
    private array $flags;

    public function __construct(array $flags)
    {
        $this->flags = $flags;
    }

    public function isEnabled(
        string $feature,
        string $role,
        string $environment,
        int $userId
    ): bool {
        if (!isset($this->flags[$feature])) {
            return false;
        }

        $config = $this->flags[$feature];

        if (!in_array($environment, $config['environments'], true)) {
            return false;
        }

        if (!in_array($role, $config['roles'], true)) {
            return false;
        }

        // Percentage rollout (deterministic)
        return ($userId % 100) < $config['rolloutPercentage'];
    }
}
