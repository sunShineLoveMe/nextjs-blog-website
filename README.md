# 备案大纲 
## 类型检查
### 1. Function函数
#### 1.1 返回类型注解
 - 返回类型注释出现在参数列表之后,<b>通常你不需要显示的返回类型注解</b>
    ``` typescript
        // 传统函数的定义
        function getNumber(a: number, b: number): number {
            return a + b;
        }

        // 箭头函数的定义,将返回值的类型添加到参数后
        const getNumber = (a: number, b: number): numebr => {
            return a + b;
        }

        // 还有一种箭头函数的表达方式
        const getNumber: (a: number, b: number) => number = (a, b) => { return a + b }

    ```
- 返回Promise的函数
    如果你想一个返回值为Promise的类型，那么就应该使用Promise类型
    ```typescript
        async function getFavoriteNumber(): Promise<number> {
            return 26
        }
    ```
### 2. 关于类型定义的原则
- 能确定类型的尽量定义类型
- 无法确定类型用any兜底
- 当函数没有返回值的时，可以使用void定义
- void any在项目很常用，never和unknown不常用

### 3. 数组的定义
```typescript
    interface User {
        name: string;
        age: number
    }

    const list = Array<User> = [{ name: 'jack', age: 30}]
```

### 4. 元组和交叉类型
```typescript
    // 当一个变量可能为整型或者字符串类型
    // a 可能是整形或者字符串类型
    let a = number | string; 
    
    // 交叉类型
    type UserType = {id: number, name: string}
    type AgeType = {age: number}

    const user: UserType & AgeType = { id: 1, name: 'javk', age: 30}
```
### 总结ts类型的使用
- 项目中应该反复使用
- 工作中举一反三，活学活用

