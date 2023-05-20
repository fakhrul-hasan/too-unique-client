import { Accordion } from "flowbite-react";
import useTitle from "../../hooks/useTitle";
import { FaQuestionCircle } from "react-icons/fa";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className=" px-10">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title><FaQuestionCircle className="inline me-4"/><span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</span></Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Access tokens are credentials used to access protected resources.<br/>
            Access tokens are used as bearer tokens. A bearer token means that the bearer (who holds the access token) can access authorized resources without further identification.<br/>
            Storing the refresh token in an in-memory JavaScript variable.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
            Refresh token is a long-lived token compared to the access token and is used to request a new access token in cases where it is expired.<br/>It can be considered as credentials used to obtain access tokens.It is allowed for long-lived access and highly confidential. Refresh tokens can be used for grant types – authorization code and password credentials grant. Refresh tokens are intended for use only with authorization servers and are never sent to resource servers.<br/>
            Storing the access token in session storage and sending it via a Bearer access_token authorization header to my resource server. Then I can use httpOnly cookies for the refresh token.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title><FaQuestionCircle className="inline me-4"/><span>Compare SQL and NoSQL databases?</span></Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Structured Query Language (SQL) is a programming language that allows both technical and non-technically-minded users to query, manipulate, and change data in a relational database. Organized into columns and rows within a table. SQL databases are scalable vertically, meaning that you can increase the maximum load by adding further storage components like RAM or SSD.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
            NoSQL databases are non-relational databases that store data in a manner other than the tabular relations used within SQL databases. While SQL databases are best used for structured data, NoSQL databases are suitable for structured, semi-structured, and unstructured data. NoSQL databases are scalable horizontally, meaning that they use multiple nodes in a cluster to handle increased workloads.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          <FaQuestionCircle className="inline me-4"/><span>What is express js? What is Nest JS?</span>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            ExpressJS is a fast, flexible, and minimalist web framework that makes building web applications easier and more efficient. It is built on top of Node.js, which is a popular platform for creating server-side applications. Whether you are a beginner or an experienced web developer, ExpressJS provides a comprehensive suite of tools to help you build high-performing and scalable web applications.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Nest.js is a NodeJS framework for building scalable server-side applications with TypeScript, it provides a suite of tools that leverage either fastify or express to facilitate rapid development and predictable readable code.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          <FaQuestionCircle className="inline me-4"/><span>What is MongoDB aggregate and how does it work?</span>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            In MongoDB, aggregation can be defined as the operation that is used for processing various types of data in the collection, which returns a calculated result.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            MongoDBs aggregate function will cluster out the records in the form of a collection which can be then employed for providing operations like total number(sum), mean, minimum and maximum, etc. from the aggregated group of data extracted.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blogs;
