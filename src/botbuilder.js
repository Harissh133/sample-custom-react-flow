const responses = {
    one:{value:"1",entryPoint:"1"},
    two:{value:"2",entryPoint:"2"},
    three:{value:"3",entryPoint:"3"},
    four:{value:"4",entryPoint:"4"},
    five:{value:"5",entryPoint:"5"},
    getNextResponse(conversation){
        // return {...this[conversation],"value":""},
        return {...this[conversation],value:""};
    }
}

const conversationOne = {
    id:"1",
    name:"One",
    responses:[responses.two,responses.six,responses.three]
}

const conversationTwo = {
    id:"2",
    name:"Two",
    responses:[responses.three,responses.four]
}
const conversationThree = {
    id:"3",
    name:"Three",
    responses:[responses.four,responses.five,responses.one]
}

const conversationFour = {
    id:"4",
    name:"Four",
    responses:[responses.getNextResponse('one')]
}

const conversationFive = {
    id:"5",
    name:"Five",
    responses:[responses.getNextResponse('four')]
}

const conversationSix = {
    id:"6",
    name:"Six",
    responses:[]
}

//console.log(conversationFive);



const resp = {
    botName:"",
    botId:"",
    conversations:[conversationOne,conversationTwo,conversationThree,conversationFour,conversationFive,conversationSix]
}

console.log(resp.conversations.toString());

