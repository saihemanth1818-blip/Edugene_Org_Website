package EDUGENE.demo.project.REPOSITORY;
//This tells Java that this interface belongs to the Repository package.

import org.springframework.data.jpa.repository.JpaRepository;
// This imports the JpaRepository interface.

import EDUGENE.demo.project.MODEL.Contact;
//imports the  Entity class

public interface ContactRepo extends JpaRepository<Contact,Integer> {

}


// JpaRepository already provides methods such as:

//JpaRepository is an interface provided by Spring Data JPA. It already contains
// many ready-made methods for performing database operations, so you don't have
// to write SQL for common tasks.

//This is an important question.
//Answer: The methods in JpaRepository are Java methods, not SQL methods.
//
//Spring Data JPA and Hibernate convert these Java method calls into SQL queries ,
// behind the scenes. us
//Hibernate is the most common implementation of JPA, and
// Spring Data JPA uses Hibernate by default
// (unless you configure a different JPA provider).



// save()        -> Inserts or updates a record.
// findAll()     -> Retrieves all records.
// findById()    -> Retrieves a record by its ID.
// delete()      -> Deletes a record.
// count()       -> Returns the total number of records.
// existsById()  -> Checks whether a record with the given ID exists.

// You do not need to implement these methods yourself.
// Spring Data JPA generates them automatically.

//eg :
//save(S entity) ===> method


//Java code
//Contact contact = new Contact();
//contact.setName("Sai");
//contact.setEmail("sai@gmail.com");

//contactRepository.save(contact);

// Generated sql
//INSERT INTO contacts(name, email)
//VALUES ('Sai', 'sai@gmail.com');
