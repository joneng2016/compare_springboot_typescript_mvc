package com.profile_learning.profile_learning.general_controller;

import com.profile_learning.profile_learning.general_controller.dto.MainGeneralController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("general_main")
public class GeneralController {

    @GetMapping("/")
    public MainGeneralController main() {

        MainGeneralController mainGeneral = new MainGeneralController();

        mainGeneral.setDescription("Description Test");

        return mainGeneral;
    }
}
