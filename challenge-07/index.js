const classroom = {
    hasTeachingAssistant : true,
    classList:['rashida', 'john', 'roman', 'lisa', 'omair', 'lukas']
}


const getStudentNames = (classroom) => {
    if (classrom.hasTeachingAssistant === true) {
       const {hasTeachingAssistant, classList} = classroom;
       const [, , ...students] = classList;
       console.log(students)
    }else{
        const {hasTeachingAssistant, classList} = classroom;
        const [, ...students] = classList;
        console.log(students)
    }
}

getStudentNames()