import inquirer from "inquirer"



let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "please enter your sentence"
})


 let word_count = user_ans.words.trim().spilt(" ").length
 
 console.log(`Your sentence has ${word_count} words.`);