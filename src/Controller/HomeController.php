<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Categorie;
use App\Repository\ArticleRepository;


use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(ArticleRepository $repository)
    {
       
        $articles = $repository->find(1);
        return $this->render('home/index.html.twig', [
            "article" => $articles
           
          
        ]);
    }

    /**
     * @Route("/programme", name="programme")
     */
    public function prog()
    {
        return $this->render('home/programme.html.twig', [
            'controller_name' => 'ProgrammeController',
        ]);
    }

}
