<?php

class Render
{
	public static function displayRecipe($recipe)
	{
        return $recipe->getTitle() . " by " . $recipe->getSource();
    }

    public static function listRecipes($titles)
    {
    	asort($titles);
        $output = "";
        foreach ($titles as $key=>$title)
        {
            if ($output != "")
            {
                $output .= "\n";
            }
            $output .= "[$key] $title";
        }
    	return $output;
    }

    public static function listShopping($ingredient_list)
    {
    	ksort($ingredient_list);
    	return implode("\n", array_keys($ingredient_list));
    }
}

?>