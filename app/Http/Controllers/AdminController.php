<?php

namespace App\Http\Controllers;

use Ezegyfa\LaravelHelperMethods\Crm\Controllers\BlueAdminController;

class AdminController extends BlueAdminController
{
    public $indexTemplateName = 'data_collector_index';
    public $editTemplateName = 'data_collector_edit';
    public $templateFolderPath = __DIR__ . '/../Templates';
    public $filterFormItemPrefix = 'data-collector-filter';
}
