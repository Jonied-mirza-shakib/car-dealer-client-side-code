import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container' style={{ height: '400px' }}>
            <div className="row pt-5 pb-5">
                <div className="col-12">
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Difference between javascript and nodejs?</Accordion.Header>
                                <Accordion.Body>
                                    1. NodeJS :
                                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                                    <br />
                                    2. JavaScript :
                                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>When should you use node js and when should you use mongodb?</Accordion.Header>
                                <Accordion.Body>
                                    Node.js is an open source server environment which uses JavaScript on the server to develop backend applications.
                                    Frontend part deals with user interaction, A user can see only frontend part of application via web browsers.
                                    <br />
                                    <br />
                                    MongoDB is a NoSQL DBMS, usually people prefer mongoDB for following reasons:
                                    NoSQL Database Management Systems are more flexible than RDBMS
                                    The expense of maintaining and even setting up a RDBMS is relatively high
                                    MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Differences between sql and nosql databases?</Accordion.Header>
                                <Accordion.Body>
                                    1.SQL
                                    <br />
                                    * RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                                    <br />
                                    * These databases have fixed or static or predefined schema
                                    <br />
                                    * These databases are not suited for hierarchical data storage.
                                    <br /><br />
                                    2.NoSQL
                                    <br />
                                    * Non-relational or distributed database system.
                                    <br />
                                    * They have dynamic schema
                                    <br />
                                    * These databases are best suited for hierarchical data storage.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                                <Accordion.Body>
                                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;