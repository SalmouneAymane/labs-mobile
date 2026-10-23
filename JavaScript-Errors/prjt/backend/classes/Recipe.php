<?php

declare(strict_types=1);

final class Recipe
{
    public function __construct(
        public readonly int $id,
        public readonly string $nom,
        public readonly string $categorie
    ) {
    }
}
