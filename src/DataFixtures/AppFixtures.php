<?php

namespace App\DataFixtures;

use App\Entity\Article;
use App\Entity\Categorie;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
      // $c1 = new Categorie();
      // $c1->setNom("Alimentation");
      // $manager->persist($c1);

      // $c2 = new Categorie();
      // $c2->setNom("Cardio");
      // $manager->persist($c2);




      //    $a1 = new Article();
      //    $a1->setTitre("Les Aliments alliés")
      //    ->setDescription("En musculation et fitness il est important de bien choisir les aliments pour atteindre ses objectifs.
      //    Nous avons sélectionné pour vous plusieurs aliments qui vont pouvoir vous aider à vous améliorer et atteindre votre physique souhaité. 
      //    Voici notre top des aliments musculation: Les flocons d'avoine, les légumineuses riches en protéines")
      //    ->setImage("images/bocaux.jpg")
      //    ->setCreatedAt(new \ DateTime())
      //    ->setCategorie($c1);
         

         

         $manager->persist($a1);

        

      $manager->flush();  
    }
}
