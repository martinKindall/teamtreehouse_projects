<?php

include "render.php";
include "recipecollection.php";

class Recipe
{
    private $title;
    private $ingredients = array();
    private $instructions = array();
    private $yield;
    private $tag = array();
    private $source = "Alena Holligan";
    
    private $measurements = array(
        "tsp",
        "oz"
    );

    public function __construct($title = null)
    {
        $this->setTitle($title);
    }

    public function __toString()
    {
        return $this->getTitle();
    }
  
    public function setTitle($title)
    {
        if (empty($title))
        {
            $this->title = null;
        }
        else
        {
             $this->title = ucwords($title);
        }
    }
    
    public function getTitle()
    {
        return $this->title;
    }

    public function getSource()
    {
        return $this->source;
    }

    public function setSource($source)
    {
        $this->source = $source;
    }

    public function getTags()
    {
        return $this->tag;
    }

    public function addTag($tag)
    {
        $this->tag[] = $tag;
    }
            
    public function getIngredients()
    {
        return $this->ingredients;
    }
    
    public function addInstruction($string)
    {
        $this->instructions[] = $string;        
    }
    
    public function getInstructions()
    {
        return $this->instructions;
    }
    
    public function addIngredient($item, $amount=null, $measure=null)
    {
        if($measure != null && !in_array($measure, $this->measurements))
        {
            exit("Please enter a valid measurement.");
        }
        
        $this->ingredients[] = array(
            "item" => $item,
            "amount" => $amount, 
            "measure" => $measure
        );
    }
        
    
}

$recipe1 = new Recipe("my first recipe");
$recipe1->addTag("desayuno");
$recipe1->addIngredient("eggs", 1);
$recipe1->addIngredient("potato", 1);
$recipe1->addIngredient("meat", 1);
$recipe1->addInstruction("This is my first instruction.");
$recipe1->addInstruction("This is my second instruction.");

$recipe2 = new Recipe("my second recipe");
$recipe2->addTag("desayuno");
$recipe2->addIngredient("eggs", 2);
$recipe2->addIngredient("beef", 1);
$recipe2->addIngredient("rice", 1);

$recipe3 = new Recipe("my third recipe");
$recipe3->setSource("<h1>Martin Cornejo</h1>");
$recipe3->addTag("once");

$cookbook = new RecipeCollection("Treehouse Recipes");
$cookbook->addRecipe($recipe1);
$cookbook->addRecipe($recipe2);
$cookbook->addRecipe($recipe3);

$desayuno = new RecipeCollection("Recetas para desayunos");

foreach($cookbook->filterByTag("desayuno") as $recipe)
{
    $desayuno->addRecipe($recipe);
}

echo Render::listRecipes($cookbook->getRecipeTitles());
//echo Render::listRecipes($desayuno->getRecipeTitles());
//echo Render::listShopping($desayuno->getCombinedIngredients());
echo Render::displayRecipe($cookbook->filterById(2));

?>