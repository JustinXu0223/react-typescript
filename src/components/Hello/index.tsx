/**
 * @component Hello
 * @description demo组件
 * @time 2018/1/9
 * @author jokerXu
 **/
import * as React from 'react';
import './index.less'
import { Button } from 'antd';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const getExclamationMarks=(numChars: number)=> {
    return numChars + 1;
};

/*const HelloComponent= ({ name, enthusiasmLevel= 1, onIncrement, onDecrement }: Props)=> {
    if (enthusiasmLevel < 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <Button type="primary" onClick={onDecrement}>-</Button>
                <Button onClick={onIncrement}>+</Button>
            </div>
        </div>
    );
};

export default HelloComponent;*/

export default class HelloComponent extends React.Component<Props, {}> {
 	constructor(props: Props){
 		super(props);
	}
	
	render(){
 		const { name, enthusiasmLevel= 1, onIncrement, onDecrement }= this.props;
		if (enthusiasmLevel <= 0) {
			throw new Error('You could be a little more enthusiastic. :D');
		}
		
		return (
			<div className="hello">
				<div className="greeting">
					Hello {name + getExclamationMarks(enthusiasmLevel)}
				</div>
				<div>
					<Button type="primary" onClick={onDecrement}>-</Button>
					<Button onClick={onIncrement}>+</Button>
				</div>
			</div>
		);
	}
}