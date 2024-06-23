use tide::Request;

#[async_std::main]
async fn main() -> tide::Result<()> {
    let mut app = tide::new();
    app.at("/message").get(say_hello);
    app.listen("127.0.0.1:8080").await?;
    Ok(())
}

async fn say_hello(req: Request<()>) -> tide::Result {
    let message = "Hello, world!";
    Ok(format!("{}", message).into())
}