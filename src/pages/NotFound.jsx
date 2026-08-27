import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){ return <section className="section"><div className="container" style={{textAlign:"center"}}><span className="eyebrow">404</span><h1 className="section-title">Fire Exit <span>Not Found.</span></h1><p className="section-copy" style={{margin:"0 auto 25px"}}>The page you're looking for doesn't exist.</p><Link className="btn btn-primary" to="/">Back to Home <i className="fa-solid fa-arrow-right"/></Link></div></section>; }
