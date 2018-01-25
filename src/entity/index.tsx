/**
 * @component entity
 * @description 实体数据模型
 * @time 2018/1/9
 * @author jokerXu
 */
export interface Demo {
  languageName: string;
  enthusiasmLevel: number;
}

export interface StoreState {
  demo: Demo;
}