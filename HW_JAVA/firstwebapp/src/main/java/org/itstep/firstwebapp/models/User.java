package org.itstep.firstwebapp.models;

import com.google.gson.annotations.SerializedName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @SerializedName("name")
    private String name;
    @SerializedName("surname")
    private String surname;
}
