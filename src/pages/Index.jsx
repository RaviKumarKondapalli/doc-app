
import React from "react";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import CodeBlock from "../components/CodeBlock";
const Index = ({ items = [] }) => {
    
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Install', href: '/Install' }
  ];
  return (
    <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <Heading level={1}>
            Documentation
        </Heading>  
        <Paragraph>
            This is the documentation for the React Learning App. It provides an overview of the app's features and how to use them.
        </Paragraph>
        <Heading level={2} border>
            Requirements
        </Heading>
        <Paragraph>
            To run this app, you need to have Node.js and npm installed on your machine. You can download them from the official Node.js website.
        </Paragraph>
        <Heading level={2} border>
            Download
        </Heading>
        <Paragraph>
            You can download a local copy from the following location:
        </Paragraph>
        <Heading level={3}>
            CDN
        </Heading>
        <Paragraph>
            Download it from CDN:
        </Paragraph>
        <ul className="list-outside list-disc rounded-xl pl-8 mb-5">
            <li><a href="#" className="underline">CDNJS</a></li>
            <li><a href="#" className="underline">JSDelivr</a></li>
            <li><a href="#" className="underline">BootCDN</a></li>
        </ul>
        <Heading level={3} className="pt-5">
            NPM
        </Heading>
        <Paragraph>
            Using  <span className="bg-gray-300 dark:bg-gray-800 text-sm rounded px-1 py-0.5">npm</span> :
        </Paragraph>
         <CodeBlock command="npm install product name --save" />

    </Layout>
  )
}

export default Index
