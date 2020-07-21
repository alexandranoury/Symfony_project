<?php

namespace App\Controller\Admin;


use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminArticleController extends AbstractController
{
    /**
     * @Route("/admin/article", name="admin_article")
     */
    public function admin(ArticleRepository $repository)
    {   
      
        $articles = $repository->findAll();
        return $this->render('admin/admin_article/adminArticle.html.twig' ,[
            "articles" => $articles,
        
            ]);
    }

    
    /**
     * @Route("/admin/article/creation", name="admin_article_creation")
     * @Route("/admin/article/{id}", name="admin_article_modification", methods="GET|POST")
     */
    public function modification(Article $article = null, Request $request, ManagerRegistry $managerRegistry)
    {   
        if(!$article) {
            $article = new Article();
            $article->setCreatedAt(new \DateTime);
        }

        $form = $this->createForm(ArticleType::class, $article);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $modif = $article->getId() !== null;
            $em = $managerRegistry->getManager();
            $em->persist($article);
            $em->flush();
            $this->addFlash("success",  ($modif) ? "La modification a été effectuée !" : "L'article a été ajouté !");
            return $this->redirectToRoute("admin_article");
        }
        
        return $this->render('admin/admin_article/modificationArticle.html.twig' ,[
            "article" => $article,
            "form" => $form->createView(),
            "isModification" => $article->getId() !== null
        
            ]);
        }

    /**
     * @Route("/admin/article/{id}", name="admin_article_suppression", methods="delete")
     */
    public function suppression(Article $article, Request $request, ManagerRegistry $managerRegistry) {
        if($this->isCsrfTokenValid("SUP" . $article->getId(), $request->get('_token'))) {
            $em = $managerRegistry->getManager();
            $em->remove($article);
            $em->flush(); 
            $this->addFlash("success", "L'article a bien été supprimé !");
            return $this->redirectToRoute("admin_article");   
        }
       
    }
     


}