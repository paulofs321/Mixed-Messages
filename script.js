didYouComp = ['do the dishes', 'do the laundry', 'feed the dogs', 'water the plants',
    'meditate', 'get the groceries']
haveYouComp = ['been working out', 'been studying programming', 'been fixing your posture', 'been eating healthy',
    'learned something new', 'went on a vacation']

//object for the message components
const messageComponent = {
    firstComp: ['Did you', 'Have you'], 
    secondComp: { //second component is based on the first component
        'Did you': didYouComp,
        'Have you': haveYouComp
    },
    thirdComp: {
        'Did you': ['today', 'this week', 'yesterday'],
        'Have you': ['lately', 'this month', 'this year']
    }
};

//function that will construct the message, returns a message object
const constructMessage = () => {
    const message = {
        randomMessage: '',
        displayMessage() {
            console.log(this.randomMessage);
        }
    }

    let randomNum = Math.floor(Math.random * messageComponent.firstComp.length)

    let randomMessage = messageComponent.firstComp[randomNum];

    message.randomMessage = randomMessage;
    return message;
};



const message = constructMessage();
message.displayMessage();

//factory function for every theme component
/*const constructThemeComp = (mComp, iComp, cComp = mComp) => { 
    const componentPerTheme = {
        'Mean': mComp, 
        'Inspirational': iComp,
        'Complimentary': cComp
    }

    return componentPerTheme;
}*/

/*const _messageComponent = {
    theme: ['Mean', 'Inspirational', 'Complimentary'],
    emphasizers: ['so', 'very', 'really']
    firstComp: ['You', 'You are', 'Your'], //first component of the message should be either of these
    secondComp: { //second component is based on the first component
        'You': constructComp(['smell', 'look', 'dress', 'dance'], ['will', 'can']),
        'You are': constructComp(['so', 'very'], ['going to'], ['a', 'an']),
        'Your': constructComp(['face', 'breath', 'momma'], ['future', 'life'], ['face', 'body', 'fashion style'])
    }
    thirdComp: { //third component is also based on the first component
        'You': constructComp(['bad', 'awful', 'horrible'], ['do big things!', 'change the world for the better!'], 
            ['good', 'great', ''])
        'You are':
        'Your':
    }
}*/
