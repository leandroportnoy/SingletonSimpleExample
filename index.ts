import { Singleton } from './Singleton/index';

//test function
function test() {
    const instanceOne = Singleton.getInstance()
    const instanceTwo = Singleton.getInstance()

    if (instanceOne == instanceTwo)
        console.log('instanceOne and instanceTwo contains the same instance')
    else
        console.log('singleton failed')

}

test()
