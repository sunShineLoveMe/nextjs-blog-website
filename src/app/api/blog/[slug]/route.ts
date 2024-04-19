import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"


/**
 * NextApiRequest: 是一个用于处理 API 路由的请求对象的类型。
 *  它提供了对客户端发起的 HTTP 请求的访问权限，包括请求的参数、头部、主体等信息
 *  query：包含了请求中的查询参数。
    body：包含了请求的主体数据，通常用于 POST、PUT 等请求方法。
    headers：包含了请求的头部信息。
    method：包含了请求的 HTTP 方法，比如 GET、POST 等。
    cookies：包含了请求中的 cookie 数据。

 * @param request: NextApiRequest
 * @param param1 
 * @returns 
 */
export const GET = async(request: NextApiRequest, { params }: {params: {slug: string}}) => {
    const { slug } = params
    try {
        connectToDb()
        const post = await Post.findOne({slug});
        return NextResponse.json(post)
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch post!")
    }
}

export const DELETE = async(request: NextApiRequest, { params }: {params: {slug: string}}) => {
    const { slug } = params
    try {
        connectToDb()
        await Post.deleteOne({slug});
        return NextResponse.json("Post deleted")
    } catch (error) {
        console.log(error)
        throw new Error("failed to delete post!")
    }
}