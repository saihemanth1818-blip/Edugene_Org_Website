package EDUGENE.demo.project.SERVICE;

import EDUGENE.demo.project.MODEL.Contact;
import EDUGENE.demo.project.REPOSITORY.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepo contactRepo;

    // Save Contact
    public Contact saveContact(Contact contact) {
        return contactRepo.save(contact);
    }

    // Get All Contacts
    public List<Contact> getAllContacts() {
        return contactRepo.findAll();
    }

    // Get Contact By I'd
    public Contact getContactById(Integer id) {
        return contactRepo.findById(id).orElse(null);
    }

    // Delete Contact
    public String deleteContact(Integer id) {
        contactRepo.deleteById(id);
        return "Contact Deleted Successfully";
    }
}