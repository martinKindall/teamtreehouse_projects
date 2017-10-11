<?php 

class RecipeCollection
{
	private $title;
	private $recipes = array();

	public function __construct($title)
	{
		$this->setTitle($title);
	}

	public function getTitle()
    {
        return $this->title;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function addRecipe($recipe)
    {
    	$this->recipes[] = $recipe;
    }

    public function getRecipes()
    {
    	return $this->recipes;
    }

    /*
    La funcion getRecipeTitles puede aceptar un tag, para
    mostrar titulos de recetas que tengan el tag indicado.
    Cuando se indica un tag, para reutilizar codigo se crea
    una nueva coleccion de recetas, en la cual se meten las
    recetas propias que presenten el tag, y luego se llama
    al mismo metodo getRecipesTitles sin tag, para mostrar todas
    las recetas filtradas.
    */
    public function getRecipeTitles($tag=null)
    {
        if ($tag !== null)
        {
            $newRecipe = new RecipeCollection("");
            $taggedRecipes = $this->filterByTag($tag);
            foreach($taggedRecipes as $recipe)
            {
                $newRecipe->addRecipe($recipe);
            }
            return $newRecipe->getRecipeTitles();
        }

        $titles = array();
        foreach ($this->recipes as $recipe)
        {
            $titles[] = $recipe->getTitle();
        }

        return $titles;
    }

    public function filterByTag($tag)
    {
        $taggedRecipes = array();
        foreach ($this->recipes as $recipe)
        {
            if(in_array(strtolower($tag), $recipe->getTags()))
            {
                $taggedRecipes[] = $recipe;
            }
        }

        return $taggedRecipes;
    }

    public function getCombinedIngredients()
    {
        $ingredients = array();
        foreach ($this->recipes as $recipe)
        {
            foreach ($recipe->getIngredients() as $ing)
            {
                $item = $ing["item"];
                if (strpos($item, ","))
                {
                    $item = strstr($item, ",", true);
                }
                if (in_array($item."s", $ingredients))
                {
                    $item.="s";
                } else if(in_array(substr($item, 0, -1), $ingredients))
                {
                    $item = substr($item, 0, -1);
                }
                $ingredients[$ing["item"]] = array(
                    $ing["amount"],
                    $ing["measure"]
                );
            }
        }
        return $ingredients;
    }

    public function filterById($id)
    {
        return $this->recipes[$id];
    }

}


?>