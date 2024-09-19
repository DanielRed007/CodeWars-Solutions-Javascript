// ---------------------------- Office Environment --------------- //

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff = {}){
    const scores = {
        "accounts": 1,
        "finance": 2,
        "canteen": 10,
        "regulation": 3,
        "trading": 6,
        "change": 6,
        "IS": 8,
        "retail": 5,
        "cleaning": 4,
        "pissing about": 25
    };
    
    let result = 0;

    for(let status in staff){
        result += scores[staff[status]]
    }

    if(result <= 80) return "kill me now"
    if(result < 100 && result > 80) return "i can handle this"
    if(result >= 100) return "party time!!"
}   

boredom({tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance' }); // 'kill me now');
boredom({ tim: 'IS', jim: 'finance',
    randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
    katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
    alex: 'regulation', john: 'accounts', mr: 'canteen' }); // 'i can handle this');
boredom({ tim: 'accounts', jim: 'accounts',
    randy: 'pissing about', sandy: 'finance', andy: 'change',
    katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
    john: 'retail', mr: 'pissing about' }); // 'party time!!');


function outed(meet, boss){
    let score = 0;
    let people = 0;

    for(let x in meet){
        people++;

        if(x === boss){
            const double = (meet[x] * 2);
            score += double;
        } else {
            score += meet[x];
        }
    }

    const overall = score / people;

    if(overall <= 5){
        return 'Get Out Now!';
    } else {
        return 'Nice Work Champ!';
    }
}

outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'); // 'Get Out Now!');
outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'); // 'Nice Work Champ!');
outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'); // 'Get Out Now!');