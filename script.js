didYouCompDaily = ['do the dishes', 'do the laundry', 'feed the dogs', 'water the plants', 'sweep the floor']
didYouCompWeekly = ['get the groceries for', 'clean the house', 'change the bedsheets']
haveYouComp = ['been working out', 'been studying programming', 'been fixing your posture', 'been eating healthy',
    'learned something new', 'went on a vacation', 'been saving up', 'been catching up with friends and family']

//object for the message components
const messageComponent = {
    firstComp: ['Did you', 'Have you'], 
    secondComp: { //second component is based on the first component
        'Did you': {
            daily: didYouCompDaily,
            weekly: didYouCompWeekly
        },
        'Have you': haveYouComp
    },
    thirdComp: {
        'Did you': {
            daily: ['today', 'this morning', 'this evening', 'this afternoon'],
            weekly: ['this week', 'last week', 'the past week']
        },
        'Have you': ['lately', 'this month', 'this year']
    }
};

const reminder = {
    choreReminder: '',
    lifestyleReminder: '',
    displayChoreMessage() {
        console.log(`CHORE REMINDER:\n${this.choreMessage}\n`);
    },
    displayLifestyleMessage() {
        console.log(`LIFESTYLE REMINDER:\n${this.lifestyleMessage}\n`);
    },
    displayBothMessages() {
        this.displayChoreMessage();
        this.displayLifestyleMessage();      
    },
    constructReminders() {
        //construct message for daily and lifestyle reminders
        for (let i = 0; i < messageComponent.firstComp.length; i++) {
            let compValRandomIdx;
            let secondCompVal;
            let thirdCompVal;

            switch (messageComponent.firstComp[i]) {
                case 'Did you': 
                    const secondCompKeys = Object.keys(messageComponent.secondComp['Did you']);
                    const compKeyRandomIdx = Math.floor(Math.random() * secondCompKeys.length);
                    const didYouSecondComp = messageComponent.secondComp['Did you'][secondCompKeys[compKeyRandomIdx]];      //randomly pick between daily or weekly keys  
                    compValRandomIdx = Math.floor(Math.random() * didYouSecondComp.length);
                    secondCompVal = didYouSecondComp[compValRandomIdx];     //randomly selects a value from one of the properties of 'Did you' of secondComp
                    
                    const didYouThirdComp = messageComponent.thirdComp['Did you'][secondCompKeys[compKeyRandomIdx]];    //third comp key stays the same as second comp
                    compValRandomIdx = Math.floor(Math.random() * didYouThirdComp.length);
                    thirdCompVal = didYouThirdComp[compValRandomIdx];   //randomly selects a value from one of the properties of 'Did you' of thirdComp

                    reminder.choreMessage = messageComponent.firstComp[i] + ' ' + secondCompVal + ' ' + thirdCompVal + '?';      //construct chore message
                    break;
                case 'Have you':
                    compValRandomIdx = Math.floor(Math.random() * messageComponent.secondComp['Have you'].length);
                    secondCompVal = messageComponent.secondComp['Have you'][compValRandomIdx];

                    compValRandomIdx = Math.floor(Math.random() * messageComponent.thirdComp['Have you'].length);
                    thirdCompVal = messageComponent.thirdComp['Have you'][compValRandomIdx];

                    reminder.lifestyleMessage = messageComponent.firstComp[i] + ' ' + secondCompVal + ' ' + thirdCompVal + '?';
                    break;
            }
        }
    }
}

reminder.constructReminders();
reminder.displayBothMessages();
