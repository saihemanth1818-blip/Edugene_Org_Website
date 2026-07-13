package EDUGENE.demo.project.CONTROLLER;

import EDUGENE.demo.project.DTO.LoginRequest;
import EDUGENE.demo.project.DTO.LoginResponse;
import EDUGENE.demo.project.MODEL.User;
import EDUGENE.demo.project.SERVICE.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    // Register API
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    // Login API
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return userService.login(request);
    }
}