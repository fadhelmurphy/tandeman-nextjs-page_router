import { Menu, Button } from '@mantine/core';
import { IconTriangleInvertedFilled } from '@tabler/icons-react';

export default function FilterButton({buttonText = null, data}) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
      <Button 
        rightSection={<IconTriangleInvertedFilled size={8}/>}
        variant="light" size='sm' radius="xl">{buttonText}</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {data.length > 0 && data.map((item) => {
            return (
            <>
            <Menu.Label>{item.parent_text}</Menu.Label>
            {item.data.map((element) => {
                return (
                    <>
                    <Menu.Item onClick={() => element.onClick()}>
                      {element.label}
                    </Menu.Item>
                    </>
                )
            })}
            </>
            )
        })}
      </Menu.Dropdown>
    </Menu>
  );
}