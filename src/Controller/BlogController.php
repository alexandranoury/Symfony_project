<?php

namespace App\Controller;

use App\Entity\Article;


use App\Repository\ArticleRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BlogController extends AbstractController
{
    /**
     * @Route("/blog", name="blog")
     */
    public function blog(ArticleRepository $repository, PaginatorInterface $paginatorInterface, Request $request)
    {
      
        
        $articles = $paginatorInterface->paginate(
        $repository->findAllWithPagination(),
        $request->query->getInt('page', 1),
        3,
        
    );
  
       
        return $this->render('blog/blog.html.twig', [

          "articles" => $articles
          

         
         
            
        ]);
    }

     /**
     * @Route("/blog/article/{id}", name="blog_article")
     */
     public function blogdetail(Article $article)
     {
       
         
         return $this->render('blog/detail.html.twig', [
 
           "article" => $article,
           
  
         ]);
     }
 




}



//  /**
//      * @Route("/blog", name="blog")
//      */
//     public function blog(ArticleRepository $repository, PaginatorInterface $paginatorInterface, Request $request)
//     {
      
        
//         $articles = $paginatorInterface->paginate(
//         $repository->findAllWithPagination(),
//         $request->query->getInt('page', 1),
//         3,
        
//     );
  
       
//         return $this->render('blog/blog.html.twig', [

//           "articles" => $articles
          

         
         
            
//         ]);
//     }