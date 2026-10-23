const demos = {
  dom() {
    document.getElementById("missing-comment-form")
      .addEventListener("submit", (event) => event.preventDefault());
  },
  json() {
    const htmlError = "<!DOCTYPE html><h1>Erreur fatale PHP</h1>";
    JSON.parse(htmlError);
  },
  array() {
    const posts = { status: "success", data: [{ title: "Mon article" }] };
    posts.forEach((post) => post.title);
  },
  fetch() {
    throw new TypeError("Failed to fetch");
  },
  function() {
    displayArticles([]);
  },
};

const fixes = {
  dom() {
    const form = document.getElementById("comment-form");
    if (form) form.addEventListener("submit", (event) => event.preventDefault());
    return form ? "Formulaire trouvé : écouteur ajouté." : "Formulaire absent : aucun écouteur ajouté, la page reste fonctionnelle.";
  },
  json() {
    const response = new Response('{"message":"Réponse JSON valide"}', {
      headers: { "Content-Type": "application/json" },
    });
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("Le serveur n'a pas renvoyé du JSON");
    }
    return response.json().then((data) => `JSON valide : ${data.message}`);
  },
  array() {
    const payload = { status: "success", data: [{ title: "Mon article" }] };
    const posts = Array.isArray(payload) ? payload : payload.data;
    if (!Array.isArray(posts)) throw new TypeError("Liste d'articles invalide");
    return `Tableau validé : ${posts.map((post) => post.title).join(", ")}`;
  },
  async fetch() {
    try {
      await Promise.reject(new TypeError("Failed to fetch"));
      return "La requête a abouti; vérifiez aussi le code HTTP de la réponse.";
    } catch {
      return "Échec réseau géré : afficher un message et permettre de réessayer.";
    }
  },
  function() {
    const displayArticles = (articles) => articles.map((article) => article.title);
    const titles = displayArticles([{ title: "Article prêt" }]);
    return `Fonction déclarée avant l'appel : ${titles.join(", ")}`;
  },
};

function showResult(kind, message, state) {
  const output = document.getElementById(`result-${kind}`);
  output.textContent = message;
  output.className = `result ${state}`;
}

document.querySelectorAll("[data-demo]").forEach((button) => {
  button.addEventListener("click", async () => {
    const kind = button.dataset.demo;
    try {
      await demos[kind]();
      showResult(kind, "Aucune erreur produite dans ce scénario.", "success");
    } catch (error) {
      showResult(kind, `${error.name}: ${error.message}`, "error");
    }
  });
});

document.querySelectorAll("[data-fix]").forEach((button) => {
  button.addEventListener("click", async () => {
    const kind = button.dataset.fix;
    try {
      const message = await fixes[kind]();
      showResult(kind, message, "success");
    } catch (error) {
      showResult(kind, `La correction a échoué : ${error.message}`, "error");
    }
  });
});

async function loadRecipes() {
  const status = document.getElementById("api-status");
  const list = document.getElementById("recipe-list");
  status.textContent = "Chargement des recettes…";
  list.replaceChildren();

  try {
    const response = await fetch("../backend/api/api.php", {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("Le backend n'a pas renvoyé du JSON.");
    }

    const recipes = await response.json();
    if (!Array.isArray(recipes)) throw new TypeError("La réponse n'est pas un tableau.");

    recipes.forEach((recipe) => {
      const item = document.createElement("li");
      item.textContent = `#${recipe.id} · ${recipe.nom} — ${recipe.categorie}`;
      list.append(item);
    });
    status.textContent = `${recipes.length} recette(s) chargée(s).`;
  } catch (error) {
    status.textContent = `API indisponible ou réponse invalide : ${error.message}`;
  }
}

document.getElementById("reload-recipes").addEventListener("click", loadRecipes);
