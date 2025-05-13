<?php
require_once 'OnPeutLouer.php';

class Velo extends OnPeutLouer {
    public function __construct(string $nom) {
        parent::__construct($nom);
    }
}
