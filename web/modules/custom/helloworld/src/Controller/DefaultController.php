<?php

namespace Drupal\helloworld\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class DefaultController.
 */
class DefaultController extends ControllerBase
{
    /**
     * Hello.
     *
     * @return array
     *   Return Hello string.
     */
    public function hello()
    {
        return [
            '#type' => 'markup',
            '#markup' => $this->t(
                '<h2>Hello World (Example Drupal 8 Controller) code:</h2>'
            ),
        ];
    }
}
