package com.module4.progress.entity;

//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.Column;
//import javax.persistence.Table;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "some_entity")
public class SomeEntityClass {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "is_active")
    private boolean isActive;

    // Default constructor
    public SomeEntityClass() {}

    // Constructor with fields
    public SomeEntityClass(int id, String name, String description, boolean isActive) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isActive = isActive;
    }

    // Getter and Setter methods
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    // Optional: toString() method for easier debugging
    @Override
    public String toString() {
        return "SomeEntityClass{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", isActive=" + isActive +
                '}';
    }

    // Optional: equals() and hashCode() methods for entity comparisons
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SomeEntityClass that = (SomeEntityClass) o;

        return id == that.id;
    }

    @Override
    public int hashCode() {
        return id;
    }
}



