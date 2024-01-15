import React, { useState } from 'react';
import TreeView from '../TreeView/Treeview';
import toggleNode from '../toggleNote';

const QuickAccess = () => {
    const [selected, setSelected] = useState('')
	const [breadcrumbs, setBreadcrumbs] = useState([])
    const [data, setData] = React.useState([
		{
			name: 'Folder',
			type: 'folder',
			children: [
				{
					name: 'Folder1',
					type: 'folder',
					children: [
						{ name: 'File1.1', type: 'file' },
						{ name: 'File1.2', type: 'file' }
					]
				},
				{
					name: 'Folder2',
					type: 'folder',
					children: [
						{
							name: 'File2.1',
							type: 'file'
						},
						{
							name: 'Folder2.2',
							type: 'folder',
							children: [
								{ name: 'File2.2.1', type: 'file' },
								{ name: 'File2.2.2', type: 'file' }
							]
						}
					]
				}
			]
		}
	])

    const onToggle = node => {
		const mutated = toggleNode(data, node)
		setData(mutated)
	}

	const onSelection = node => {
		if (node.type === 'folder') onToggle(node.name)
		setSelected(node.name)
		setBreadcrumbs(breadcrumbs => [...breadcrumbs, node.name])
	}


  return (
    <div>
      <TreeView
						data={data}
						onSelection={onSelection}
						onToggle={onToggle}
					/>
    </div>
  )
}

export default QuickAccess
