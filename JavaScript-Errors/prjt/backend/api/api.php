<?php

declare(strict_types=1);

require_once __DIR__ . '/../classes/RecipeRepository.php';

header('Content-Type: application/json; charset=utf-8');

$repository = new RecipeRepository(__DIR__ . '/../data/recipes.json');
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

try {
    if ($method === 'GET') {
        echo json_encode($repository->all(), JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);
        exit;
    }

    if ($method === 'POST') {
        $payload = json_decode(file_get_contents('php://input') ?: '', true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($payload) || !isset($payload['nom'], $payload['categorie'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Les champs nom et categorie sont requis.'], JSON_UNESCAPED_UNICODE);
            exit;
        }

        $recipe = $repository->add(trim((string) $payload['nom']), trim((string) $payload['categorie']));
        http_response_code(201);
        echo json_encode($recipe, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);
        exit;
    }

    http_response_code(405);
    header('Allow: GET, POST');
    echo json_encode(['error' => 'Méthode non autorisée.'], JSON_UNESCAPED_UNICODE);
} catch (JsonException $error) {
    http_response_code(400);
    echo json_encode(['error' => 'Corps JSON invalide.'], JSON_UNESCAPED_UNICODE);
} catch (InvalidArgumentException $error) {
    http_response_code(400);
    echo json_encode(['error' => $error->getMessage()], JSON_UNESCAPED_UNICODE);
} catch (RuntimeException $error) {
    error_log($error->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Erreur interne du serveur.'], JSON_UNESCAPED_UNICODE);
}
