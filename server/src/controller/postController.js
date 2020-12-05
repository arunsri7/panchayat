const { Router } = require('express');
const express = require('express');
const router = express.Router();
const PostMessage =  require('../models/postMessage')

const getPosts = async (req, res) => {
    try{
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    }catch{
        res.status(404).json({message:console.error.message})
    }
 
}

const createPosts = async (req,res) => {
    const post = req.body
    const newPost = new PostMessage(post);
    console.log("reached posts")
    try{
        await newPost.save()
        res.status(201).json(newPost)
    }catch{
        res.status(409).json({message:console.error.message})
    }
}


module.exports = {
    router,
    getPosts,
    createPosts
  };
