import { Component } from '@angular/core';

@Component({
  selector: 'components-overview',
  styleUrls: ['overview.component.scss'],
  templateUrl: 'overview.component.html',
})
export class ComponentsOverviewComponent {
  items: Object[] = [{
      color: 'deep-purple-700',
      icon: 'view_list',
      route: 'steps',
      title: 'Stepper',
    }, {
      color: 'blue-700',
      icon: 'open_with',
      route: 'expansion-panel',
      title: 'Expansion Panel',
    }, {
      color: 'cyan-700',
      icon: 'file_upload',
      route: 'file-upload',
      title: 'File Upload',
    }, {
      color: 'grey-700',
      icon: 'label',
      route: 'chips',
      title: 'Chips',
    }, {
      color: 'light-green-700',
      icon: 'hourglass_empty',
      route: 'loading',
      title: 'Loading',
    }, {
      color: 'pink-700',
      icon: 'code',
      route: 'syntax-highlighting',
      title: 'Highlighting',
    }, {
      color: 'teal-700',
      icon: 'format_indent_increase',
      route: 'json-formatter',
      title: 'JSON Formatter',
    }, {
      color: 'orange-700',
      icon: 'chrome_reader_mode',
      route: 'markdown',
      title: 'Markdown',
    }, {
      color: 'red-700',
      icon: 'devices',
      route: 'media',
      title: 'Media',
    }, {
      color: 'indigo-700',
      icon: 'http',
      route: 'http',
      title: 'Http',
    }, {
      color: 'deep-orange-700',
      icon: 'filter_list',
      route: 'pipes',
      title: 'Pipes',
    },
  ];
}
