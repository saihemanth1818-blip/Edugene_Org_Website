package EDUGENE.demo.project.SERVICE;

import EDUGENE.demo.project.DTO.LoginRequest;
import EDUGENE.demo.project.DTO.LoginResponse;
import EDUGENE.demo.project.MODEL.User;
import EDUGENE.demo.project.REPOSITORY.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    // Register User
    public User register(User user) {
        return userRepo.save(user);
    }

    // Login User
    public LoginResponse login(LoginRequest request) {

        Optional<User> optionalUser = userRepo.findByEmail(request.getEmail());

        if (optionalUser.isEmpty()) {
            return new LoginResponse("", "Email not found");
        }

        User user = optionalUser.get();

        if (!user.getPassword().equals(request.getPassword())) {
            return new LoginResponse("", "Invalid Password");
        }

        return new LoginResponse("", "Login Successful");
    }
}