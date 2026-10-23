<?php

declare(strict_types=1);

final class RecipeRepository
{
    public function __construct(private readonly string $file)
    {
        if (!is_file($this->file)) {
            throw new RuntimeException('Le fichier de données est introuvable.');
        }
    }

    public function all(): array
    {
        $json = file_get_contents($this->file);
        if ($json === false) {
            throw new RuntimeException('Impossible de lire les recettes.');
        }

        $recipes = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($recipes)) {
            throw new UnexpectedValueException('Le fichier de recettes doit contenir un tableau.');
        }

        return $recipes;
    }

    public function add(string $nom, string $categorie): array
    {
        if ($nom === '' || $categorie === '') {
            throw new InvalidArgumentException('Le nom et la catégorie sont obligatoires.');
        }

        $recipes = $this->all();
        $ids = array_column($recipes, 'id');
        $recipe = [
            'id' => $ids === [] ? 1 : max($ids) + 1,
            'nom' => $nom,
            'categorie' => $categorie,
        ];
        $recipes[] = $recipe;

        $json = json_encode($recipes, JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        if (file_put_contents($this->file, $json . PHP_EOL, LOCK_EX) === false) {
            throw new RuntimeException('Impossible d’enregistrer la recette.');
        }

        return $recipe;
    }
}
