document.addEventListener('DOMContentLoaded', function() {

    const testBtn = document.querySelector('.tab-btn-test');
    const courseBtn = document.querySelector('.tab-btn-courses');
    
  
    const testsSection = document.querySelector('.my-tests');
    const coursesSection = document.querySelector('.my-courses');
    
  
    function showTests() {
        
        testBtn.style.backgroundColor = 'blueviolet';
        testBtn.style.borderColor = 'blueviolet';
        testBtn.style.color = 'white';
        courseBtn.style.backgroundColor = 'white';
        courseBtn.style.color = 'black';
        
       
        testsSection.style.display = 'flex';
        coursesSection.style.display = 'none';
    }
    
    
    function showCourses() {
     
        courseBtn.style.backgroundColor = 'blueviolet';
        courseBtn.style.borderColor = 'blueviolet';
        courseBtn.style.color = 'white';
        testBtn.style.backgroundColor = 'white';
        testBtn.style.color = 'black';
        
       
        testsSection.style.display = 'none';
        coursesSection.style.display = 'flex';
    }
    
   
    testBtn.addEventListener('click', showTests);
    courseBtn.addEventListener('click', showCourses);
    
   
    showTests();
});