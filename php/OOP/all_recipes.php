<?php

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
  
    public function setTitle($title)
    {
        $this->title = ucwords($title);
    }
    
    public function getTitle()
    {
        return $this->title;
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
        
    public function displayRecipe()
    {
        return $this->title . " by " . $this->source;
    }
}

$recipe1 = new Recipe();
$recipe1->setTitle("my first recipe");
$recipe1->addIngredient("eggs", 1);

$recipe2 = new Recipe();
$recipe2->setTitle("my second recipe");

//echo $recipe1->displayRecipe();
//echo $recipe1->title;
echo $recipe1->getTitle();
foreach ($recipe1->getIngredients() as $ingredient)
{
    echo "item: ".$ingredient["item"]." amount: ".$ingredient["amount"];
}

$recipe1->addInstruction("This is my first instruction.");
$recipe1->addInstruction("This is my second instruction.");

echo implode("\n", $recipe1->getInstructions());

echo $recipe2->displayRecipe();

?>