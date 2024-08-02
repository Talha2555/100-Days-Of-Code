var programmerSkills = {
    languages: ["Javascript", 'Typescript', 'Phython', "C++"],
    frameWorks: ['NextJs', 'Angular', 'ReactJS'],
    tools: ['Docker', 'Git', 'Npm', 'Bootstap']
};
//// Getting specific skills from the list
var languages = programmerSkills.languages, frameWorks = programmerSkills.frameWorks, tools = programmerSkills.tools;
console.log("Favorite Language : ".concat(languages[2], " \nFavorite FrameWorks : ").concat(frameWorks[1], " \nFavorite Tools : ").concat(tools[0]));
