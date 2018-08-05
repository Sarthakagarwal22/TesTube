var questions = [
	{
		question: "How will you print \\n on the screen?",
		options: ["printf(\"\\n\");", "echo\"\\n\";", "printf('\\n');", "printf(\"\\n\");"],
		answer: 3,
	},
	{
		question: "In which stage does the code '#include<stdio.h>' get replaced by the contents of the file stdio.h?",
		options: ["During editing", "During linking", "During execution", "During preprocessing"],
		answer: 3,
	},
	{
		question: "What id (void*)0?",
		options: ["Representation of NULL pointer", "Representation of void pointer", "Error", "None of these"],
		answer: 0,
	},
	{
		question: "Which of the following is the correct usage of conditional operators used in C?",
		options: ["a>b ? c=30 : c=40;", "a>b ? c=30;", "max = a>b ? a>c?a:c : b>c?b:c;", "return (a>b)?(a:b);"],
		answer: 2,
	},
	{
		question: "Declare 'A pointer to an array of three chars'.",
		options: ["char *ptr[3]();", "char (*ptr)*[3];", "char (*ptr[3])();", "char (*ptr)[3];"],
		answer: 3,
	},
	{
		question: "Which of the following statements is correct?",
		options: ["Base class pointer cannot point to derived class.", "Derived class pointer cannot point to base class.", "Pointer to derived class cannot be created.", "Pointer to base class cannot be created."],
		answer: 1,
	},
	{
		question: "Which of the following statements is correct?",
		options: ["Two functions having same number of argument, order and type of argument can be overloaded if both functions do not have any default argument.", "Overloaded function must have default arguments.", "Overloaded function must have default arguments starting from the left of argument list.", "A function can be overloaded more than once."],
		answer: 3,
	},
	{
		question: "Which of the following statements is correct? <br> 1. An array of references is acceptable. <br> 2. We can also create a reference to a reference.]",
		options: ["Only 1 is correct.", "Only 2 is correct.", "Both 1 and 2 are correct.", "Both 1 and 2 are incorrect."],
		answer: 3,
	},
	{
		question: "How can we make a class abstract?",
		options: ["By making all member functions constant.", "By making at least one member function as pure virtual function.", "By declaring it abstract using the static keyword.", "By declaring it abstract using the virtual keyword."],
		answer: 3,
	},
	{
		question: "What happens when a class with parameterized constructors and having no default constructor is used in a program and we create an object that needs a zero-argument constructor?",
		options: ["Compile-time error.", "Preprocessing error.", "Runtime error.", "Runtime exception."],
		answer: 3,
	},
];