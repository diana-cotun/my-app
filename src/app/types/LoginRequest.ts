class LoginRequest{

private userEmail: string;
private password: string;

constructor( userEmail: string,  password: string){
    this.userEmail = userEmail;
    this.password = password;
}

}

export default LoginRequest;