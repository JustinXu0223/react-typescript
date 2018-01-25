import { HelloComponent } from '../../components';
import * as Actions from '../../actions/demo';
import { StoreState } from '../../entity';
import { connect, Dispatch } from 'react-redux';

/***
 * 这里最关键的两块是原始的```Hello```组件和react-redux的```connect```函数。
 * ```connect```可以使用以下两个函数实际地将原始的```Hello```组件转化为一个容器：
 *
 * ```mapStateToProps```，可以将当前store的数据作为消息传给我们组件需要shape。
 * ```mapDispatchToProps```，可以创建回调属性来使用```dispatch```函数将行为推送到我们的store。
* */

export function mapStateToProps( { demo: { enthusiasmLevel, languageName: name } }: StoreState) {
    return {
        enthusiasmLevel,
        name,
    };
}

/*** 请注意，```mapStateToProps```仅创建```Hello```组件期望的属性中的2个。
 * 也就是说，我们仍然希望通过```onIncrement```和```onDecrement```回调。
 * ```mapDispatchToProps```是一个采用调度程序功能的函数。
 * 此调度程序功能可以将操作传递到我们的存储中进行更新，
 * 因此我们可以创建一对可以根据需要调用调度程序的回调函数。
* */

export function mapDispatchToProps(dispatch: Dispatch<Actions.All>) {
    return {
        onIncrement: () => dispatch(Actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(Actions.decrementEnthusiasm()),
    };
}

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return { ...ownProps, ...stateProps, ...dispatchProps};
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HelloComponent);