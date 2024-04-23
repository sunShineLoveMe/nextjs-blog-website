## 类型检查
### 1. Function函数
#### 1.1 返回类型注解
 - 返回类型注释出现在参数列表之后,<b>通常你不需要显示的返回类型注解</b>
    ``` typescript
        function getNumber(): number {
            return 26
        }
    ```
- 返回Promise的函数
    如果你想一个返回值为Promise的类型，那么就应该使用Promise类型
    ```typescript
        async function getFavoriteNumber(): Promise<number> {
            return 26
        }
    ```


