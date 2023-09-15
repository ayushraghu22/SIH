import "./course.scss";
import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import articles from "./Articles";

const Course = (props) => {
  return (
    <div className="outerCourse">
      <div className="course container">
        <h1 className="text-center">Course Videos</h1>

        <div className="courseBody row my-3">
          {articles &&
            articles.map((element) => {
              return (
                element.url && (
                  <div className="col-md-4 my-3" key={element.url}>
                    <CourseItem
                      title={
                        element.title && element.title.length > 70
                          ? element.title.slice(0, 70)
                          : element.title
                      }
                      description={
                        element.description && element.description.length > 88
                          ? element.description.slice(0, 88)
                          : element.description
                      }
                      imageUrl={
                        element.imageUrl
                          ? element.imageUrl
                          : "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm90JTIwZm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                      }
                      url={element.url}
                      publishedAt={element.publishedAt}
                      author={
                        element.author ? element.author.slice(0, 20) : "Unknown"
                      }
                      source={element.source.name}
                    />
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Course;
