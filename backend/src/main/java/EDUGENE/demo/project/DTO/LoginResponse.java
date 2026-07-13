package EDUGENE.demo.project.DTO;

public class LoginResponse {

    private String token;
    private String message;

    // Default Constructor
    public LoginResponse() {
    }

    // Parameterized Constructor
    public LoginResponse(String token, String message) {
        this.token = token;
        this.message = message;
    }

    // Getter
    public String getToken() {
        return token;
    }

    // Setter
    public void setToken(String token) {
        this.token = token;
    }

    // Getter
    public String getMessage() {
        return message;
    }

    // Setter
    public void setMessage(String message) {
        this.message = message;
    }
}