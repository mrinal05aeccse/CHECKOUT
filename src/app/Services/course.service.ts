export class CourseService{
    courses = [
        { id:101, name:'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free', 
          price: 0.00, ratings: 3.5, image:'assets/courses/course-image-1.jpeg',
          description: 'In this course you will learn the fundamentals of JavaScript. This course is purely designed for beginners and teaches you all the concepts of javascript step by step'
        },
        { id:102, name:'Angular for beginners', author: 'Mark Vought', duration: 28, type: 'Premium', 
          price: 129.00, ratings: 4.5, image:'assets/courses/course-image-2.jpeg',
          description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'
        },
        { id:103, name:'React for beginners', author: 'Steve Smith', duration: 18.5, type: 'Free', 
          price: 0.00, ratings: 4.0, image:'assets/courses/course-image-3.jpeg',
          description: 'In this course you will learn the fundamentals of React. This course is purely designed for beginners and teaches you all the basic concepts of React step by step'
        }];

        total:number=0;

        DeleteCourse(id:number){
            this.courses.splice(id,1);
        }
}