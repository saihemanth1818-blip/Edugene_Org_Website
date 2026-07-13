

package EDUGENE.demo.project.CONTROLLER;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import EDUGENE.demo.project.MODEL.Contact;
import EDUGENE.demo.project.REPOSITORY.ContactRepo;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/contacts")

public class ContactContro {

    @Autowired
    private ContactRepo contactRepository;

    // ==========================
    // CREATE
    // ==========================
    @PostMapping
    public Contact saveContact(@RequestBody Contact contact) {

        System.out.println("========== CONTROLLER REACHED ==========");
        System.out.println("Name    : " + contact.getName());
        System.out.println("Email   : " + contact.getEmail());
        System.out.println("Phone   : " + contact.getPhone());
        System.out.println("Message : " + contact.getMessage());

        try {

            Contact savedContact = contactRepository.save(contact);

            System.out.println("========== SAVED SUCCESSFULLY ==========");

            return savedContact;

        } catch (Exception e) {

            System.out.println("========== SAVE FAILED ==========");
            e.printStackTrace();

            throw e;
        }
    }

    // ==========================
    // READ ALL
    // ==========================
    @GetMapping
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // ==========================
    // READ BY ID
    // ==========================
    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable int id) {

        return contactRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Contact not found with id : " + id));
    }

    // ==========================
    // UPDATE
    // ==========================
    @PutMapping("/{id}")
    public Contact updateContact(@RequestBody Contact newContact,
                                 @PathVariable int id) {

        return contactRepository.findById(id)
                .map(contact -> {

                    contact.setName(newContact.getName());
                    contact.setEmail(newContact.getEmail());
                    contact.setPhone(newContact.getPhone());
                    contact.setMessage(newContact.getMessage());

                    return contactRepository.save(contact);

                })
                .orElseThrow(() ->
                        new RuntimeException("Contact not found with id : " + id));
    }

    // ==========================
    // DELETE
    // ==========================
    @DeleteMapping("/{id}")
    public String deleteContact(@PathVariable int id) {

        if (!contactRepository.existsById(id)) {
            throw new RuntimeException("Contact not found with id : " + id);
        }

        contactRepository.deleteById(id);

        return "Contact deleted successfully.";
    }
}